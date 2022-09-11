class BaseRepository {
  _model;
  constructor(model) {
    this._model = model
  }

  getAll() {
    console.log(123)
    return this._model.findMany();
  }

  getById(id) {
    return this._model.findUnique({where: { Id: +id }});
  }

  create(data) {
    console.log(data)
    return this._model.create({ data });
  }

  update(id, data) {
    console.log(data)
    return this._model.update({
      where: { Id: +id },
      data : data
    })
  }

  deleteById(id) {
    return this._model.delete({ where: { Id: +id }})
  }
}

export default BaseRepository