import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

import { AllPlacesProps } from '../../../types/AllPlaces.types'

export type HomeTemplateProps = {
    children: ReactNode,
    places: AllPlacesProps[]
}

export type StylesProps = {
    image: StaticImageData
}