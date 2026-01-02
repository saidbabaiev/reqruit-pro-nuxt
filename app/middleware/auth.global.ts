export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();

    // Add all protected routes here
    const protectedRoutes = ['/dashboard', '/profile', '/settings'];
    const isProtected = protectedRoutes.some(route => to.path.startsWith(route)); 

    // If the route is protected and user is not authenticated, redirect to login
    if (isProtected && !user.value) {
        return navigateTo('/login');
    }

    // If user is authenticated and trying to access login page, redirect to dashboard
    if (to.path === '/login' && user.value) {
        return navigateTo('/dashboard')
    }

})