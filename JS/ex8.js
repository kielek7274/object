let number = {
    current: 0,
   
    add() {
      this.current++;
      return this;
    },    
    subtract() {
      this.current--;
      return this;
    }, 
    showResult: function() {
      console.log(this.current);
      return this;
    }
  };


number.subtract().add().add().add().subtract().showResult();