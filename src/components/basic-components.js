export const Logo = () =>{
    return(
    <div className="flex gap-1">
        <span className="text-blue-500 text-2xl font-medium">Blue</span>
        <span className="text-gray-800 text-2xl font-medium">Forest</span>
    </div>
    )
}

export const Text = (props) => <span className="feed-text text-gray-800 text-base font-medium">{props.text}</span> 

export const BoldText = (props) => <span className="text-gray-800 text-base font-bold">{props.text}</span> 

export const TimeText = (props) => <span className="text-gray-400 text-sm font-normal w-max">{props.text}</span> 

export const NavButtonText = (props) => <span className="text-blue-600 text-lg font-normal">{props.text}</span>