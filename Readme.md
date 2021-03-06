# modal-window

> зе бест модальное окно!

## Задание

Необходимо реализовать модуль, который будет показывать модальное окно. Модальное окно должно быть адаптивным, открытие/закрытие должно сопровождаться анимацией. В открытом состоянии на заднем фоне должен появляться overlay. Так же должна блокироваться прокрутка содержимого страницы на заднем фоне.

Необходимо предусмотреть настройки заголовка модального окна, содержимого, кнопок "Ок"/"Отмена", крестика, возможности закрытия модельного окна по клику на оверлей, по нажатию ESC.

В самом простом случае, модальное окно должно быть компонентом-модулем со следующими методами:
- метод конструктора &mdash; принимает объект с параметрами
- метод `renderTo(el: HTMLElement)` &mdash; вставляет модальное окно в DOM страницы
- методы `open()`/`close()` &mdash; программно открывают/закрывают модальное окно

За решение задачи в таком виде ставится максимум 3 балла из пяти.

Для того, чтобы получить 5/5 баллов, необходимо реализовать решение с использованием веб-компонентов (примерно как это было на последней лекции).

Выглядеть это может примерно так:

```html

<modal-window opened="false" esc overlay cross>
	<h1 slot="header">Заголовок модального окна</h1>
	<main slot="content">
		<h2>Содержимое модального окна</h2>
	</main>
</modal-window>

```

Приветствуются оригинальные идеи и красивое оформление решения (с примером). Если всё будет очень круто, то можно будет даже получить парочку доп. баллов ;)

Срок сдачи &mdash; до последнего РК.
