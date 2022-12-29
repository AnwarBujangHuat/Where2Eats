import React, { memo } from "react";
import { colors } from "configs/Const";
import { TouchableOpacity } from "react-native";
import Icon from "./Icon";

function Toggle({ onTouch, checked, iconColor = colors.primary }) {
  return (
    <TouchableOpacity onPress={onTouch} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
      <Icon name={checked ? "deleteCircle" : "addCircle"} fill={iconColor} viewBox={checked ? "0 0 22 22" : "0 0 23 23"}
            height={checked ? 22 : 20}
            width={checked ? 22 : 24}></Icon>
    </TouchableOpacity>
  );
}

export default memo(Toggle);
