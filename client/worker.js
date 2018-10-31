console.log('Service Worker Loaded...');
//This part of code can be implemented into any html document
//on a loop or by manual handling by calling in everytime there
//is a notification to sent
self.addEventListener('push',e=>{
    const data=e.data.json();
    console.log('Push Recieved...');
    self.registration.showNotification(data.title, {
        body: 'Notified by Vashista Gande!',
        //icon: 'img address ie. http://image.ibb.co/frYOFd/tmlogo.png'
    });
});

