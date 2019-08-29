EmployeeManager.Views.Employee = Backbone.View.extend({
    tagName: 'li',
    className: 'media col-sm-12 col-lg-6 align-items-center border-bottom border-dark mb-5 pb-4',
    template: _.template($('#tpl-contact').html()),
    events: {
        'click .delete-employee': 'onClickDelete'
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    onClickDelete: function (e) {
        e.preventDefault();
        this.model.destroy(this.model);
    }
});
