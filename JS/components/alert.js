function thisIsAnAlert(
    message = 'This is an alert',
    classType = 'danger',
    ) {
    return `<div class="${classType}">${message}<div>`;
}