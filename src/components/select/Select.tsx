import React, {
  CSSProperties,
  FC,
  MouseEvent,
  useCallback,
  useState,
} from "react";
import {
  SelectBadge,
  SelectHeader,
  SelectItem,
  SelectItemsWrapper,
  SelectOptionsWrapper,
  SelectWrapper,
} from "./select.styled";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

interface SelectPropsInterface {
  value: string;
  options: string[];
  onChange: (selectedOption: string) => void;
  style?: CSSProperties;
  isMultiple?: boolean;
}

export const Select: FC<SelectPropsInterface> = ({
  onChange,
  options,
  value = options[0],
  isMultiple = false,
  style,
}) => {
  const [selectValue, setSelectValue] = useState<string | any[]>(
    !isMultiple ? value : [value]
  );
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const onItemClick = useCallback(
    (option: string | any) => {
      setSelectValue(option);
      onChange(option);
      !isMultiple && setIsOpened(!isOpened);
    },
    [isMultiple, isOpened, onChange]
  );

  const onDropdownExpand = useCallback(
    (e: MouseEvent | any) => {
      setIsOpened(!isOpened);
    },
    [isOpened]
  );

  const checkIfMultipleItemSelected = useCallback(
    (option: any | string) => {
      let res: string | any = null;

      if (isMultiple) {
        if (Array.isArray(selectValue)) {
          res =
            typeof option === "string"
              ? selectValue.find((e) => e === option)
              : selectValue.find((e) =>
                  Object.values(option).every((el) =>
                    Object.values(e).includes(el)
                  )
                );
        }
      }
      return res;
    },
    [isMultiple, selectValue]
  );

  //multiple

  const onSelectItem = (option: string | any) => {
    if (!isMultiple) return onItemClick(option);
    setSelectValue((pr: any) => [...pr, option]);
    onChange([...(selectValue as []), option] as any);
  };
  const onRemoveItem = (option: string | any) => {
    if (isMultiple && Array.isArray(selectValue)) {
      setSelectValue(selectValue.filter((val: string | any) => val !== option));
      onChange(
        selectValue.filter((val: string | any) => val !== option) as any
      );
    }
  };

  const checkBoxRenderer = (option: string) => {
    return (
      <input
        checked={!!checkIfMultipleItemSelected(option)}
        type="checkbox"
        onChange={() => {}}
      />
    );
  };

  return (
    <SelectWrapper style={style}>
      <SelectHeader onClick={onDropdownExpand}>
        <SelectItemsWrapper>
          {typeof selectValue === "string"
            ? selectValue
            : isMultiple &&
              selectValue.map((e) => (
                <SelectBadge>
                  {e}
                  <AiFillCloseCircle
                    onClick={(event: MouseEvent | any) => {
                      event.stopPropagation();
                      onRemoveItem(e);
                    }}
                  />
                </SelectBadge>
              ))}
        </SelectItemsWrapper>
        {isOpened ? <BiChevronUp /> : <BiChevronDown />}
      </SelectHeader>
      {isOpened && (
        <SelectOptionsWrapper>
          {options.map((option) => {
            return (
              <SelectItem
                as={isMultiple ? "div" : "option"}
                key={`opt-${option}`}
                value={option}
                className={
                  checkIfMultipleItemSelected(option) ? "selected" : ""
                }
                onClick={() => {
                  !checkIfMultipleItemSelected(option)
                    ? onSelectItem(option)
                    : onRemoveItem(option);
                }}>
                {isMultiple && checkBoxRenderer(option)} {option}
              </SelectItem>
            );
          })}
        </SelectOptionsWrapper>
      )}
    </SelectWrapper>
  );
};
