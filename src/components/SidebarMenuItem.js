import React from 'react';

export default function SidebarMenuItem(props) {
  return (
    <li className={`rounded-md ${props.active ? 'bg-primary-150 text-[#2E6C6EFF] font-body' : ''}`}>
      <a href={props.href} onClick={props.onClick} className='flex items-center p-2 space-x-3 rounded-md relative font-body'>
        <span className='pr-2'>{props.label}</span>
      </a>
    </li>
  );
}
// {`rounded-sm ${props.active ? 'bg-primary-150 text-[#2E6C6EFF] font-body' : ''}`}