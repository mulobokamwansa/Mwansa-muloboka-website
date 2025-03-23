import React from "react";
import { resourcesLink, platformLink, communityLink } from "../constants";

function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-800 ">
      <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h2 className="text-md font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            {resourcesLink.map((link, index) => (
              <li
                key={index}
                className="mb-2 text-neutral-400 hover:text-neutral-300"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-md font-semibold mb-4'>Platform</h2>
          <ul className='space-y-2'>
            {platformLink.map((link, index) => (
              <li key={index} className='mb-2 text-neutral-400 hover:text-neutral-300'>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-md font-semibold mb-4'>Community</h2>
          <ul className='space-y-2'>
            {communityLink.map((link, index) => (
              <li key={index} className='mb-2 text-neutral-400 hover:text-neutral-300'>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
