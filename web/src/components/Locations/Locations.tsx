import { navigate, routes } from '@redwoodjs/router'

import LocationCard, { ILocationCardProps } from '../LocationCard/LocationCard'

import useImportFromGMapsMutation from './useImportFromGMapsMutation'

interface ILocationsProps {
  locations?: ILocationCardProps[]
}

const Locations = ({ locations }: ILocationsProps) => {
  const { onImport: onImportFromGMaps } = useImportFromGMapsMutation({
    onImportComplete: (newLocation) => {
      navigate(routes.location({ id: newLocation.id }))
    },
  })

  return (
    <ul className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-0 lg:grid-cols-3">
      {locations ? (
        locations.map((location) => {
          return (
            <LocationCard
              key={location.id || location.gmapsPlaceId}
              id={location.id}
              gmapsPlaceId={location.gmapsPlaceId}
              onImportFromGMaps={onImportFromGMaps}
              businessName={location.businessName}
              address={location.address}
              backgroundImageUrl={location.backgroundImageUrl}
            />
          )
        })
      ) : (
        <>
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
        </>
      )}
    </ul>
  )
}

export default Locations
