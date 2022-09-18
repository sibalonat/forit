import { defineComponent } from 'vue';
import { Color, ShaderMaterial, UniformsUtils } from 'three';
import SubsurfaceScatteringShader from './SubsurfaceScatteringShader';
import Material from './Material';
import { bindObjectProp } from '../tools';
export default defineComponent({
    extends: Material,
    props: {
        uniforms: { type: Object, default: () => ({
                diffuse: '#ffffff',
                thicknessColor: '#ffffff',
                thicknessDistortion: 0.4,
                thicknessAmbient: 0.01,
                thicknessAttenuation: 0.7,
                thicknessPower: 2,
                thicknessScale: 4,
            }) },
    },
    methods: {
        createMaterial() {
            const params = SubsurfaceScatteringShader;
            const uniforms = UniformsUtils.clone(params.uniforms);
            bindObjectProp(this, 'uniforms', uniforms, true, (dst, key, value) => {
                const dstVal = dst[key].value;
                if (dstVal instanceof Color)
                    dstVal.set(value);
                else
                    dst[key].value = value;
            });
            const material = new ShaderMaterial({
                ...params,
                lights: true,
                ...this.props,
                uniforms,
            });
            return material;
        },
    },
});
//# sourceMappingURL=SubSurfaceMaterial.js.map