import React from 'react'

export default () => (
    <section className='w-100'>
        <h4 className='p-2 grey'>
            <img src='/logo192.png' alt='logo' width='40' height='40' />
            <span className='ml-2'>Офіс Романа Грищука</span>
        </h4>
        <h1 className='Title'>Симуляція місцевих виборів 2020</h1>
        <p>Цей симулятор розраховує склад місцевої ради в містах, де діє система з відкритими списками.
            Ви можете вказати назви партій, округи і зазначити скільки голосів або відсотків набирає партія.
            Симулятор покаже, скільки мандатів в місцевій раді отримує партія на округах і за загальним списком.
        </p>
        <p>В автоматичному режимі в таблиці з'являються дані з ЦВК парламентських виборів у Києві у 2019 році.</p>
    </section>
)