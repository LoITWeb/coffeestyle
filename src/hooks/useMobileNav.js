import { useState, useEffect } from 'react';

const useMobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const body = document.body;

		if (isOpen) {
			const scrollY = window.scrollY;
			const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

			// Фиксируем страницу и компенсируем полосу прокрутки
			body.style.cssText = `
        position: fixed;
        top: -${scrollY}px;
        left: 0;
        right: 0;
        width: 100%;
        padding-right: ${scrollBarWidth}px;
      `;
			body.dataset.scrollY = scrollY;
		} else {
			// Восстанавливаем страницу
			const savedY = parseInt(body.dataset.scrollY || '0', 10);
			body.style.cssText = '';
			delete body.dataset.scrollY;
			window.scrollTo(0, savedY);
		}

		// Очистка при размонтировании
		return () => {
			body.style.cssText = '';
			delete body.dataset.scrollY;
		};
	}, [isOpen]);

	const toggleNav = () => setIsOpen(prev => !prev);

	return { isOpen, toggleNav };
};

export default useMobileNav;      