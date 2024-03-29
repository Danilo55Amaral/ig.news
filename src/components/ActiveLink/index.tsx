import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...props }: ActiveLinkProps) {
    const { asPath } = useRouter()

    const className = asPath === props.href 
        ? activeClassName 
        : '';

    return (
        <Link {...props}>
            {cloneElement(children, {
                className,
            })}
        </Link>
    );
}