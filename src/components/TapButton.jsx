export default function TapButton({children,isSelected, ...props}){
    console.log('Tap button component');
    return(
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
        </li>
    )
}