if (!!window.PublicKeyCredential) {
    // Collect client information
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const osVersion = navigator.oscpu;
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
   
    // Construct a JSON object with the collected data
    const clientData = {
      userAgent,
      platform,
      osVersion,
      browserName,
      browserVersion
    };
   
    // Make the HTTP request to the webhook
    fetch('https://webhook.site/1e25df19-37b8-45a7-a509-8f8aef87abac', {
      method: 'POST',
      body: JSON.stringify(clientData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        console.error('Webhook request failed:', response.statusText);
      } else {
        console.log('Client information sent successfully');
      }
    })
    .catch(error => {
      console.error('Error sending client information:', error);
    });
   }
   