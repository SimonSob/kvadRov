if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function Calculate()
{
    const a= document.getElementById("a").value;
    const b= document.getElementById("b").value;
    const c= document.getElementById("c").value;

    let res;

    let disc = (b*b) - (4*a*c)

    if(disc>= 0)
    {
        if(d ==0)
        {
            res1 = (-b) / (2*a)
            res2 = (-b) / (2*a)
        }
        else
        {
            res1 = (-b + Math.sqrt(disc)) / (2*a*b)
            res1 = (-b - Math.sqrt(disc)) / (2*a*b)
        }
        
    }
    else
    {
        res1 = "nelze";
    }
}
