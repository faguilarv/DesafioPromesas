postData = document.querySelector("#post-photos")

const getPosts = async () => {
    const getDataPosts = 'https://jsonplaceholder.typicode.com/photos'

    try {
        const response = await fetch(getDataPosts)
        const data = await response.json()
        data.slice(0, 20).forEach(item => {
            console.log(item.title)
            const postElement = document.createElement('div')
            postElement.innerHTML = `
                <li><strong>${item.title}</strong></li>
                
                <hr>
            `
            postData.appendChild(postElement);
        })

    } catch (error) {
        console.log('se ha producido un error al obtener los datos', error)

    }
}

const resolveData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('datos enviados correctamente')
        }, 3000)
    })
}

const msg = async () => {
    const loading = document.querySelector("#loading")

    try {
        loading.innerHTML = "<strong>Sus datos se están cargando...</strong>"
        const msg = await resolveData()
        console.log(msg)

        await getPosts()
    } catch (error) {
        console.log("se ha producido un error")
    } finally {
        loading.innerHTML = ""
    }
}

msg()