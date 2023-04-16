
    function logLocation() {
        fetch('http://api.open-notify.org/iss-now.json')
          .then(res => res.json())
          .then(data => {
            const container = document.getElementById("location");
            container.textContent = `Latitude: ${data.iss_position.latitude}, Longitude: ${data.iss_position.longitude}`;
          });
      }
  
      const sub = document.getElementById("sub-button");
      sub.addEventListener('click', logLocation);