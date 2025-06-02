document.getElementById('forms').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submit

    const email = document.getElementById('mail').value;
    const message = document.getElementById('message').value;

    if (!email || !message) {
        alert('Please fill in all fields!');
        return;
    }

    const formData = new FormData(this);

    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('responseMessage').innerHTML = data;
        document.getElementById('responseMessage').style.color = 'green';
        this.reset();
    })
    .catch(err => {
        document.getElementById('responseMessage').textContent = 'Error sending message.';
        document.getElementById('responseMessage').style.color = 'red';
        console.error(err);
    });
});
