import { WINDOW_PADDING } from "../constants"

export const getFontSize = (mainElement: HTMLElement | null) => mainElement ? parseFloat(getComputedStyle(mainElement).fontSize) : 16

const getDimensionOffset = (mainElement: HTMLElement) => WINDOW_PADDING * getFontSize(mainElement) * 2

const getBoardDimensions = (mainElement: HTMLElement | null): Promise<[number, number]> => mainElement ?
    Promise.resolve({ mainElementStyle: window.getComputedStyle(mainElement), dimensionOffset: getDimensionOffset(mainElement) }).then(({ mainElementStyle, dimensionOffset }) => [
        parseInt(mainElementStyle.getPropertyValue('width')) - dimensionOffset,
        parseInt(mainElementStyle.getPropertyValue('height')) - dimensionOffset,
    ]) : Promise.resolve([0, 0])

export default getBoardDimensions;