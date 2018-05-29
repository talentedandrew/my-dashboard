import {
  SAVE_TOP_BAR_DATA,
  SHOW_TOP_BAR,
  SHOW_SCROLL_TOP,
} from '../../constants';

export function saveTopBarData(payload) {
  return {
    type: SAVE_TOP_BAR_DATA,
    payload,
  };
}

export function showTopBar(payload) {
  return {
    type: SHOW_TOP_BAR,
    payload,
  };
}

export function showScrollToTop(payload) {
  return {
    type: SHOW_SCROLL_TOP,
    payload,
  };
}
