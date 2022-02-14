export const TOGGLE_PAGE_NEXT = 'USERS/TOGGLE_PAGE_NEXT';
export const TOGGLE_PAGE_PREV = 'USERS/TOGGLE_PAGE_PREV';

export const togglePageNext = () => {
  return {
    type: TOGGLE_PAGE_NEXT,
  };
};

export const togglePagePrev = () => {
  return {
    type: TOGGLE_PAGE_PREV,
  };
};
