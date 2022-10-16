import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';



export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full text-gray-100 text-xs outline-none placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300">
            {props.children}
        </div>
    );
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputInputProps) {
    return <Slot className="w-6 h-6 text-gray-400">
        {props.children}
    </Slot>;
}

export interface TextInputInputProps
    extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1  text-gray-100 text-xs outline-none placeholder:text-gray-400"
            {...props}
        ></input>
    );
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
};
