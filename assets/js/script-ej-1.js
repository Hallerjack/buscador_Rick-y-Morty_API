/* Generando un REQUEST con método FETCH */
const baseApi = "https://randomuser.me/api"

async function getMonedas() {
    // const res =  await fetch("https://api.gael.cloud/general/public/monedas")

    const res =  await fetch(baseApi)
    const data = await res.json()
    const user = data.results[0]

    let html = `
                <p>${user.name.first} ${user.name.last}</p>
                <p>${user.email}</p>
                <p>${user.phone}</p>
                <p>${user.location.city}</p>
    `

    console.log(data);

    const userDiv = document.querySelector(".user");
    // userDiv.innerHTML = data.results[0].email
    userDiv.innerHTML = html
    document.querySelector(".foto").src = user.picture.large

}

getMonedas();