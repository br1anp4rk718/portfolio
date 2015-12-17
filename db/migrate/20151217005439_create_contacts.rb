class CreateContacts < ActiveRecord::Migration
	create_table :contacts do |t|
		t.string :name, :validate =>true
		t.string :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
		t.string :message
		t.string :nickname, :captcha =>true
	end

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "My Contact Form",
      :to => "br1anp4rk718@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
