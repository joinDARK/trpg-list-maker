import Card from "../ui/Card";
import Line from "../ui/Line";
import Textarea from "../ui/Textarea";
import Field from "./Field";

export default function CharacterList() {
  return (
    <div className="flex flex-col gap-3">
      <Card title="ИНФОРМАЦИЯ">
        <div className="grid grid-cols-4 gap-3 items-center">
          <p>Имя</p>
          <Field className="col-span-3" name="Имя"/>
          <p>Раса</p>
          <Field className="col-span-3" name="Раса"/>
          <p>Класс</p>
          <Field className="col-span-3" name="Класс"/>
          <p>Уровень</p>
          <Field className="col-span-3" type="number" name="Уровень"/>
          <Line className="col-span-4" />
          <p>Хиты</p>
          <Field className="col-span-3" type="number" name="Хиты"/>
          <p>КЗ</p>
          <Field className="col-span-3" type="number" name="КЗ"/>
          <p>Скорость</p>
          <Field className="col-span-3" type="number" name="Скорость"/>
          <p>БМ</p>
          <Field className="col-span-3" name="БМ"/>
        </div>
      </Card>
      <Card title="ХАРАКТЕРИСТИКИ">
        <div className="flex flex-col gap-3 items-center">
          <Card className="w-full">
            <div className="grid grid-cols-4 gap-3 items-center">
              <p className="col-span-3 text-start uppercase">Сила</p>
              <Field  center name="Сила"/>
              <Line className="col-span-4"/>
              <p className="col-span-3 text-start">Атлетика</p>
              <Field  center name="Атлетика"/>
            </div>
          </Card>
          <Card className="w-full">
            <div className="grid grid-cols-4 gap-3 items-center">
              <p className="col-span-3 text-start uppercase">Ловкость</p>
              <Field  center name="Ловкость"/>
              <Line className="col-span-4"/>
              <p className="col-span-3 text-start">Акробатика</p>
              <Field  center name="Акробатика"/>
              <p className="col-span-3 text-start">Ловкость рук</p>
              <Field  center name="Ловкость рук"/>
              <p className="col-span-3 text-start">Скрытность</p>
              <Field  center name="Скрытность"/>
            </div>
          </Card>
          <Card className="w-full">
            <div className="grid grid-cols-4 gap-3 items-center">
              <p className="col-span-3 text-start uppercase">Телосложение</p>
              <Field  center name="Телосложение"/>
            </div>
          </Card>
          <Card className="w-full">
            <div className="grid grid-cols-4 gap-3 items-center">
              <p className="col-span-3 text-start uppercase">Интеллект</p>
              <Field  center name="Интеллект"/>
              <Line className="col-span-4"/>
              <p className="col-span-3 text-start">Анализ</p>
              <Field  center name="Анализ"/>
              <p className="col-span-3 text-start">История</p>
              <Field  center name="История"/>
              <p className="col-span-3 text-start">Магия</p>
              <Field  center name="Магия"/>
              <p className="col-span-3 text-start">Природа</p>
              <Field  center name="Природа"/>
              <p className="col-span-3 text-start">Религия</p>
              <Field  center name="Религия"/>
            </div>
          </Card>
          <Card className="w-full">
            <div className="grid grid-cols-4 gap-3 items-center">
              <p className="col-span-3 text-start uppercase">Мудрость</p>
              <Field  center name="Мудрость"/>
              <Line className="col-span-4"/>
              <p className="col-span-3 text-start">Восприятие</p>
              <Field  center name="Восприятие"/>
              <p className="col-span-3 text-start">Выживание</p>
              <Field  center name="Выживание"/>
              <p className="col-span-3 text-start">Медицина</p>
              <Field  center name="Медицина"/>
              <p className="col-span-3 text-start">Проницательность</p>
              <Field  center name="Проницательность"/>
              <p className="col-span-3 text-start">Уход за животными</p>
              <Field  center name="Уход за животными"/>
            </div>
          </Card>
          <Card className="w-full">
            <div className="grid grid-cols-4 gap-3 items-center">
              <p className="col-span-3 text-start uppercase">Харизма</p>
              <Field  center name="Харизма"/>
              <Line className="col-span-4"/>
              <p className="col-span-3 text-start">Выступление</p>
              <Field  center name="Выступление"/>
              <p className="col-span-3 text-start">Запугивание</p>
              <Field  center name="Запугивание"/>
              <p className="col-span-3 text-start">Обман</p>
              <Field  center name="Обман"/>
              <p className="col-span-3 text-start">Убеждение</p>
              <Field  center name="Убеждение"/>
            </div>
          </Card>
        </div>
      </Card>
      <Card title="СНАРЯЖЕНИЕ">
        <div className="flex flex-col gap-3">
          <div className="flex gap-7 justify-between">
            <div>
              <p className="text-orange-700 sm:text-center">ММ</p>
              <Field className="col-span-3" center name="ММ"/>
            </div>
            <div>
              <p className="text-gray-400 sm:text-center">СМ</p>
              <Field className="col-span-3" center name="СМ"/>
            </div>
            <div>
              <p className="text-yellow-500 sm:text-center">ЗМ</p>
              <Field className="col-span-3" center name="ЗМ"/>
            </div>
            <div>
              <p className="text-slate-500 sm:text-center">ЭМ</p>
              <Field className="col-span-3" center name="ЭМ"/>
            </div>
            <div>
              <p className="text-slate-300 sm:text-center">ПМ</p>
              <Field className="col-span-3" center name="ПМ"/>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p>Предметы</p>
            <Textarea rows={8} name="Предметы"/>
          </div>
        </div>
      </Card>
      <Card title="ЗАМЕТКИ">
        <div className="flex">
          <Textarea rows={12} full name="Заметки"/>
        </div>
      </Card>
    </div>
  )
}