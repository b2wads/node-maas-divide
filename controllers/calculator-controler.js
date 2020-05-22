module.exports = {
  async divide(req, res) {
    const { left, right } = req.body
    const divide = left / right
    const response = {
      result: divide,
    }
    return res.status(200).json(response)
  },
}
