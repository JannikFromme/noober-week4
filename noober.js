window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // Empty the rides div element

    // Get reference to ride div element
    let rideElement = document.querySelector(`.rides`)

    // Use innerHTML to empty the div element
    rideElement.innerHTML =``
  
  // Loop through all available rides  
  for (i = 0; i < json.length; i++) {

    // Create a variable to store each ride in memory
    let ride = json[i]

    // Create a variable for the HTML element we're going to add
    let htmlElement = document.querySelector(`.rides`)

    // Create conditional statement to identify the level of service and insert HTML accordingly

      // Noober Purple
      if (ride.purpleRequested == true) {

        htmlElement.insertAdjacentHTML (`beforeend`, 
        `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-taxi"></i>
          <span>Noober Purple</span>
        </h1>

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 p-2 text-white">
              ${ride.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride.pickupLocation.address}</p>
              <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride.dropoffLocation.address}</p>
              <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>`
        )
      // Noober XL (number of passengers > 3)
      } else if (ride.numberOfPassengers > 3) {
        htmlElement.insertAdjacentHTML (`beforeend`, 
        `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl font-bold bg-clip-text text-transparent bg-gray-900">
          <i class="fas fa-truck"></i>
          <span>Noober XL</span>
        </h1>

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride.pickupLocation.address}</p>
              <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride.dropoffLocation.address}</p>
              <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>`
        )
      //Else: Noober X
      } else {
        htmlElement.insertAdjacentHTML (`beforeend`, 
        `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gray-900">
          <i class="fas fa-car-side"></i>
          <span>Noober X</span>
        </h1>

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride.pickupLocation.address}</p>
              <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride.dropoffLocation.address}</p>
              <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>`
        )
      }
  }
})