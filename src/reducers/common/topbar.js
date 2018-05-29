import {
  SAVE_TOP_BAR_DATA,
  SHOW_TOP_BAR,
  SHOW_SCROLL_TOP,
} from '../../constants';

export default function topBarContent(
  state = { show: true, data: [], scrollTop: 0, showScrollTop: false },
  action,
) {
  const { type, payload = {} } = action;
  switch (type) {
    case SAVE_TOP_BAR_DATA:
      return { ...state, data: payload };
    case SHOW_TOP_BAR:
      return { ...state, show: payload.show, scrollTop: payload.scrollTop };
    case SHOW_SCROLL_TOP:
      return { ...state, showScrollTop: payload.showScrollTop };
    default:
      return state;
  }
}
