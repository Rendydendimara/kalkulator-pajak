import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { convertPriceStringToNumber, toFormatPrice } from '../../utils/currency';

interface IProps {
  value?: any;
  onChange?: (e: any) => void;
  name?: string;
  width?: string
  placeholder?: string;
  borderColor?: string;
  isTesting?: boolean
  disabled?: boolean;
  _disabled?: any;
  type?: "number" | "price"
}

const InputCustom: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<any>('')

  const handleOnChange = (e: any) => {
    if (props.isTesting) {
      setValue(convertPriceStringToNumber(e.target.value))
    } else {
      if (props.onChange) {
        props.onChange({
          target: {
            name: props.name,
            value: convertPriceStringToNumber(e.target.value),
          },
        })
      }
    }
  }

  const getValue = () => {
    if (props.isTesting) {
      return toFormatPrice(value, 'IDR')
    } else {
      return toFormatPrice(props.value, 'IDR')
    }
  }

  if (props.type === 'number') {
    return (
      <Input
        width={props?.width ?? 'full'}
        isDisabled={props.disabled}
        type="number"
        _disabled={props._disabled}
        borderColor={props?.borderColor ?? 'initial'}
        autoComplete='new-password'
        _hover={{}}
        placeholder={props.placeholder ?? ''}
        onChange={props.onChange}
        value={props.value}
      />
    )
  }

  return (
    <Input
      width={props?.width ?? 'full'}
      isDisabled={props.disabled}
      _disabled={props._disabled}
      borderColor={props?.borderColor ?? 'initial'}
      autoComplete='new-password'
      _hover={{}}
      placeholder={props.placeholder ?? ''}
      onChange={handleOnChange}
      value={getValue()}
    />
  );
};

export default InputCustom;
