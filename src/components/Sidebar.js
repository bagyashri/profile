export default function Sidebar(props) {
    return (
      <div className="sidebar-menu">
           <div className="flex">
            <div className="flex flex-col p-3 w-full">
                <div className="space-y-3">
                <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {props.children}
                        </ul>
                   </div>
                </div>
            </div>
        </div>
       
      </div>
    );
  }