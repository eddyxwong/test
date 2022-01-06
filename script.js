const test = () => {};

document.getElementById('submit').addEventListener('click', (e) => {
  const applicationId = document.getElementById('applicationId').value;

  window.fbAsyncInit = function () {
    FB.init({
      appId: applicationId,
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v12.0',
    });
  };
});
