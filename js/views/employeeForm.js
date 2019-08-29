EmployeeManager.Views.EmployeeForm = Backbone.View.extend({
    template: _.template($('#tpl-new-contact').html()),

    events: {
        'submit .employee-form': 'onFormSubmit'
    },

    render: function () {
        var html = this.template(_.extend(this.model.toJSON(), {
            isNew: this.model.isNew()
        }));

        this.$el.append(html);
        return this;

    },

    onFormSubmit: function (e) {
        var isNew = this.model.isNew();

        e.preventDefault();

        this.trigger('form:submitted', {
            name: this.$('.employee-name-input').val(),
            tel: this.$('.employee-tel-input').val(),
            email: this.$('.employee-email-input').val(),
            avatar: '150?img=' + _.random(1, 50)
        });

        if (isNew) {

            var addEmployee = new EmployeeManager.Models.Employee(
                {
                    name: this.$('.employee-name-input').val(),
                    tel: this.$('.employee-tel-input').val(),
                    email: this.$('.employee-email-input').val(),
                    avatar: '150?img=' + _.random(1, 50)
                }
            );

            var employees = new EmployeeManager.Collections.Employees();

            employees.add(addEmployee);
            addEmployee.save();
        }
    }
});
