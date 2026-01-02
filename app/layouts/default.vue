<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-64 bg-white border-r p-4 hidden md:block">
       Sidebar
    </aside>

    <main class="flex-1 p-8 overflow-auto">
      <slot />
    </main>
  </div>
</template>