import { rgb } from 'color-convert'

export type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {rgb: [number, number, number]};
};

type Colorstate = {
  hexColor: string;
};

export const initialState: Colorstate = {
  hexColor: '#BADA55',
};

export type AdjustColorAction = UpdateHexColorAction | UpdateRGBColorAction

export const colorReducer = (
  state: Colorstate = initialState,
  action: AdjustColorAction
) => {
  if (action.type === 'update-hex-color' ){
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }

  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }

  return state;
};
