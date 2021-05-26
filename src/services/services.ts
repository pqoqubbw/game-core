import FieldView from '../view/field';

class Service {
  constructor(
    public model: any = new Something(),
    public view: any = new FieldView(3, 3),
  ) { }

  
}

export default Service;
