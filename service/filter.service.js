$(function() {
    if (!localStorage.getItem('token')) {
        location.href = "/app/auth/login.html";
    }
});