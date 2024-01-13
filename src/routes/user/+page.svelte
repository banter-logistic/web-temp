<script>
  let selectedTab = "profile";

  let user = {
    name: "John Doe",
    role: "Web Developer",
    email: "john.doe@example.com",
    location: "City, Country",
    image: "/Banter-image/facebook.png",
    Phone: "087783886494",
  };

  let newPassword = "";
  let confirmPassword = "";

  /**
   * @param {string} tab
   */
  function toggleTab(tab) {
    selectedTab = tab;
  }

  function saveProfile() {
    // Implement logic to save the edited profile data
    console.log("Profile saved:", user);
    toggleTab("profile");
  }

  function changePassword() {
    // Implement logic to change the password
    if (newPassword === confirmPassword) {
      console.log("Password changed");
      newPassword = "";
      confirmPassword = "";
    } else {
      console.error("New password and confirm password do not match");
    }
  }
</script>

<div class="flex flex-col sm:flex-row justify-center mt-10">
  <div class="sm:w-1/4 bg-white p-8 rounded-md shadow-md">
    <nav class="mb-4">
      <button
        class="block py-2 px-4 hover:bg-gray-300 rounded-md mb-2"
        on:click={() => toggleTab("profile")}
        class:selected={selectedTab === "profile"}
      >
        User Profile
      </button>
      <button
        class="block py-2 px-4 hover:bg-gray-300 rounded-md mb-2"
        on:click={() => toggleTab("edit-profile")}
        class:selected={selectedTab === "edit-profile"}
      >
        Edit Profile
      </button>
      <button
        class="block py-2 px-4 hover:bg-gray-300 rounded-md mb-2"
        on:click={() => toggleTab("change-password")}
        class:selected={selectedTab === "change-password"}
      >
        Change Password
      </button>
    </nav>
  </div>
  <div class="sm:w-3/4">
    {#if selectedTab === "profile"}
      <div class="bg-white p-8 rounded-md shadow-md">
        <div class="flex items-center justify-center mb-6">
          <div class="w-16 h-16 rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src={user.image} />
          </div>
        </div>
        <h2 class="text-2xl font-semibold mb-2">{user.name}</h2>
        <!-- <p class="text-gray-600 text-sm mb-4">{user.role}</p> -->
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <strong>Email:</strong>
            {user.email}
          </div>
          <div>
            <strong>Location:</strong>
            {user.location}
          </div>
          <div>
            <strong>Handphone:</strong>
            {user.Phone}
          </div>
        </div>
        <div class="mt-6">
          <button
            on:click={() => toggleTab("edit-profile")}
            class="text-blue-500 hover:underline"
          >
            Edit Profile
          </button>
        </div>
      </div>
    {:else if selectedTab === "edit-profile"}
      <form on:submit|preventDefault={saveProfile}>
        <div class="bg-white p-8 rounded-md shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Edit Profile</h2>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Name</label>
            <input
              bind:value={user.name}
              type="text"
              class="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Role</label>
            <input
              bind:value={user.role}
              type="text"
              class="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Email</label>
            <input
              bind:value={user.email}
              type="email"
              class="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600"
              >Location</label
            >
            <input
              bind:value={user.location}
              type="text"
              class="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button
            >
          </div>
        </div>
      </form>
    {:else if selectedTab === "change-password"}
      <div class="bg-white p-8 rounded-md shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Change Password</h2>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600"
            >New Password</label
          >
          <input
            bind:value={newPassword}
            type="password"
            class="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600"
            >Confirm Password</label
          >
          <input
            bind:value={confirmPassword}
            type="password"
            class="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div class="flex justify-end">
          <button
            on:click={changePassword}
            class="bg-blue-500 text-white px-4 py-2 rounded-md"
            >Change Password</button
          >
        </div>
      </div>
    {/if}
  </div>
</div>
