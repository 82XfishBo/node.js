let n=1;

nextPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open(`get`, `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status <= 300) {
            const array = JSON.parse(request.response);
            for (let i = 0; i < array.length; i++){
                const li = document.createElement(`li`);
                li.textContent = array[i].id;
                console.log(li)
                abc.appendChild(li);
            }
            // array.forEach(item => {
            //     const li = document.createElement(`li`);
            //     li.textContent = item.id;
            //     console.log(li)
            //     adc.appendChild(li);
            // });
            n += 1;
        }
    }
    request.send();
}

jsonGet.onclick = () => {
    const request = new XMLHttpRequest();
    request.open(`get`, `/5.json`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status <= 300) {
            const obj = JSON.parse(request.response);
            console.log(obj);
            myName.textContent = obj.name;
        }
    }
    request.send();
}

xmlGet.onclick = () => {
    const request = new XMLHttpRequest();
    request.open(`GET`, `/4.xml`);
    request.onreadystatechange = ()=>{
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const dom = request.responseXML;
                console.log(request.responseXML);
                const text = dom.getElementsByTagName(`warning`)[0].textContent;
                console.log(text.trim());
            }
        }
    }
    request.send();
}

htmlGet.onclick = () => {
    const request = new XMLHttpRequest();
    request.open(`get`, `/3.html`);
    request.onload = () => {
        const html = document.createElement(`div`);
        document.body.appendChild(html);
        html.innerHTML = request.response;
        console.log(sss);
    }
    request.onerror = () => {
        console.log(`调用失败`)
    }
    request.send();
}

cssGet.onclick = () => {
    const request = new XMLHttpRequest();
    request.open(`GET`, `/css`);
    request.onload = () => {
        console.log(`request.response`)
        console.log(request.response)//request.response是请求的响应内容。
        const style = document.createElement(`style`);//创建了节点style，但是还有没有进入html。
        document.head.appendChild(style);//将创建的节点style写入html，head标签中。
        ttt.innerHTML = `大清还在！！我<span id="myName"></span>是正红旗！！！`
        style.innerHTML = request.response;//改写html内容
        // document.head.appendChild(style);
        console.log(request.response);
    };
    request.onerror = () => {
        console.log(`调用失败`)
    };

    request.send();
};

JSGet.onclick = () => {
    const request = new XMLHttpRequest();
    request.open(`GET`, `/2.js`);//大小写无所谓
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const script = document.createElement(`script`);
                document.body.appendChild(script);
                script.innerHTML = request.response;
                console.log(request.response);
            } else {
                console.log(`加载失败`);
            }
        }
    }
    request.send();
}
