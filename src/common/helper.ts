const isCloseToBottom = (bottom: {
  layoutMeasurement: any;
  contentOffset: any;
  contentSize: any;
}) => {
  const paddingToBottom = 0;
  return (
    bottom.layoutMeasurement.height + bottom.contentOffset.y >=
    bottom.contentSize.height - paddingToBottom
  );
};

export {isCloseToBottom};
