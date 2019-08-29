EmployeeManager.Views.Employees = Backbone.View.extend({
    template: _.template($('#tpl-contacts').html()),

    renderOne: function (employee) {
        var itemView = new EmployeeManager.Views.Employee({ model: employee });
        this.$('.contacts-container').append(itemView.render().$el);
    },

    render: function () {
        this.$el.html(this.template());

        this.collection.each(this.renderOne, this);
        return this;
    }
});
