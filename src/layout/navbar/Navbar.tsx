import { useEffect, useMemo, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from '../../config/Theme'
import DropDown from '../../components/buttons/DropDown'
import { useTranslation } from 'react-i18next'



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
    const [current, setCurrent] = useState<string>('')
    const { i18n, t } = useTranslation();

    const [language, setLanguage] = useState<'en' | 'az'>('az');

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const navigation = useMemo(() => [
        { name: t('navbar.about'), href: 'about' },
        { name: t('navbar.skill'), href: 'skills' },
        { name: t('navbar.portfolio'), href: 'portfolio' },
        { name: t('navbar.contact'), href: 'contact' },
        { name: t('navbar.resume'), href: '/FarmayilHasanovCv.pdf', external: true },
    ], [t]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -200px 0px',
            threshold: 0.3,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrent(entry.target.id)
                }
            })
        }, observerOptions)

        navigation.forEach(item => {
            if (!item.external) {
                const section = document.getElementById(item.href)
              /*   console.log(section, 'sec')
                console.log(item.href, 'item.href') */
                if (section) observer.observe(section)
            }
        })

        return () => {
            navigation.forEach(item => {
                if (!item.external) {
                    const section = document.getElementById(item.href)
                    if (section) observer.unobserve(section)
                }
            })
        }
    }, [navigation])


    const handleLanguageChange = (lang: { name: string; value: string }) => {
        setLanguage(lang.value as 'en' | 'az');
    }

    return (
        <Disclosure as="nav" className="bg-csblack fixed w-full z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <div className="flex items-center justify-end sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#FFFFFF] hover:bg-[#E65F78] hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <Bars3Icon className="block size-6 group-data-open:hidden" />
                            <XMarkIcon className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Right side */}
                    <div className='absolute w-fit right-0 sm:left-0 justify-end '>
                        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    </div>

                    <div className="sm:flex items-center space-x-4 ml-2 sm:ml-[13%] md:ml-[7%]">
                        <DropDown onSelect={handleLanguageChange} />
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-1 justify-end items-center">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    item.external ? (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={classNames(
                                                'text-[#FFFFFF] hover:bg-[#E65F78] hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={`#${item.href}`}
                                            aria-current={current === item.href ? 'page' : undefined}
                                            className={classNames(
                                                current === item.href
                                                    ? 'bg-[#E65F78] text-white'
                                                    : 'text-[#FFFFFF] hover:bg-[#E65F78] hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                                            )}
                                            onClick={() => setCurrent(item.href)}
                                        >
                                            {item.name}
                                        </a>
                                    )
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Panel */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 ">
                    {navigation.map((item) => (
                        item.external ? (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-[#E65F78] hover:text-white"
                            >
                                {item.name}
                            </DisclosureButton>
                        ) : (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={`#${item.href}`}
                                aria-current={current === item.href ? 'page' : undefined}
                                className={classNames(
                                    current === item.href
                                        ? 'bg-[#E65F78] text-white'
                                        : 'text-gray-300 hover:bg-[#E65F78] hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                                onClick={() => setCurrent(item.href)}
                            >
                                {item.name}
                            </DisclosureButton>
                        )
                    ))}

                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
