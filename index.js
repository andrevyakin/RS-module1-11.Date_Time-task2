const getDaysBeforeBirthday = nextBirthdayDate => {
    const convertMsToDays = mS => {
        return mS / 1000 / 60 / 60 / 24;
    }
    return Math.round(convertMsToDays(nextBirthdayDate - new Date().setHours(0)));
    // new Date().setHours(0) чтобы получить сегодняшнюю дату в 0 часов.
    // Date.now() возвращает милисекунды на сейчас, таким образом результат будет зависить от того,
    // запустишь ты программу до обеда или после. Мы так не считаем. Мы учитываем сегодняшний неполный день, как полный.
}

console.log(`До моего дня рождения осталось ${getDaysBeforeBirthday(new Date(2023, 7, 5))}`);