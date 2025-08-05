import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from '../../Theme'

const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Experience', href: '#', current: false },
    { name: 'Skill', href: 'skills', current: false },
    { name: 'Portfolio', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: 'Resume', href: '#', current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
    return (
        <Disclosure as="nav" className="bg-csblack">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#FFFFFF] hover:bg-[#E65F78] hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <Bars3Icon className="block size-6 group-data-open:hidden" />
                            <XMarkIcon className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Right side (Avatar + Toggle) */}
                    <div>
                        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={`#${item.href}`}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current
                                                ? 'bg-[#E65F78] text-white'
                                                : 'text-[#FFFFFF] hover:bg-[#E65F78] hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current
                                    ? 'bg-[#E65F78] text-white'
                                    : 'text-gray-300 hover:bg-[#E65F78] hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
