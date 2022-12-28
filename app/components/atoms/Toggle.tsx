import React, { memo } from "react";
import { colors } from "../../configs/Const";
import { TouchableOpacity } from "react-native";
import Icon from "./Icon";

function Toggle({ onTouch, checked, iconColor = colors.primary }) {
  return (
    <TouchableOpacity onPress={onTouch} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
      <Icon name={checked ? "deleteCircle" : "addCircle"} fill={iconColor} viewBox={"0 0 12 9"} height={12}
            width={9}></Icon>
    </TouchableOpacity>
  );
}

export default memo(Toggle);
