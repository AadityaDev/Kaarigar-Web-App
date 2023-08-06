const partnerDataHeading = "Trusted by the world’s most innovative schools"
const partnersData = [
    {
        id: 1,
        name: "Transistor",
        logo: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
    },
    {
        id: 2,
        name: "Reform",
        logo: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"

    },
    {
        id: 3,
        name: "Tuple",
        logo: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
    },
    {
        id: 4,
        name: "SavvyCal",
        logo: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
    },
    {
        id: 5,
        name: "Statamic",
        logo: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
    }
]

export default function Partners() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            {partnerDataHeading}
          </h2>
          {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div> */}
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {partnersData.map((partner) => (
            <img
              key={partner.id}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={partner.logo}
              alt={partner.name}
              width={158}
              height={48}
            />
            ))}
          </div>
        </div>
      </div>
    )
  }
  