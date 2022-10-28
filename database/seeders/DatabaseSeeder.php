<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'delete users']);
        Permission::create(['name' => 'edit users']);
        Permission::create(['name' => 'create groups']);
        Permission::create(['name' => 'delete groups']);
        Permission::create(['name' => 'edit groups']);
        Permission::create(['name' => 'create projects']);
        Permission::create(['name' => 'delete projects']);
        Permission::create(['name' => 'edit projects']);
        Permission::create(['name' => 'create documents']);
        Permission::create(['name' => 'delete documents']);
        Permission::create(['name' => 'edit documents']);
        Permission::create(['name' => 'publish documents']);
        Permission::create(['name' => 'unpublish documents']);


        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'employee']);
        $role1->givePermissionTo('create documents');
        $role1->givePermissionTo('edit documents');

        $role2 = Role::create(['name' => 'admin']);
        $role2->givePermissionTo('create groups');
        $role2->givePermissionTo('edit groups');
        $role2->givePermissionTo('create projects');
        $role2->givePermissionTo('delete projects');
        $role2->givePermissionTo('edit projects');
        $role2->givePermissionTo('create documents');
        $role2->givePermissionTo('delete documents');
        $role2->givePermissionTo('edit documents');
        $role2->givePermissionTo('publish documents');
        $role2->givePermissionTo('unpublish documents');

        $role3 = Role::create(['name' => 'Super-Admin']);
        // gets all permissions via Gate::before rule; see AuthServiceProvider


        $user = User::factory()->create([
            'name' => 'Example User',
            'email' => 'test@example.com',
        ]);
        $user->assignRole($role1);

        $user = User::factory()->create([
            'name' => 'Example Admin User',
            'email' => 'admin@example.com',
        ]);
        $user->assignRole($role2);

        $user = User::factory()->create([
            'name' => 'Marin Nikolli',
            'email' => 'sibalonat@gmail.com',
        ]);
        $user->assignRole($role3);




        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
