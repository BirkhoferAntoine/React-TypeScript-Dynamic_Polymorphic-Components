import {type ComponentPropsWithoutRef} from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href: never;
};
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href: string;
};

function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
    return 'href' in props;
}

const Button = (props: AnchorProps | ButtonProps) => {
        if (isAnchorProps(props)) {
            return <a className={'button'} {...props}></a>
        }

        return (
            <button className={'button'} {...props}></button>
        );
}

export default Button;